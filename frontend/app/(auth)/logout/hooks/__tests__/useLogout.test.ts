import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useLogout } from "../useLogout";

const mockSignOut = vi.fn(() => ({ error: null }));

const mockUseSupabase = () => ({
  supabase: {
    auth: {
      signOut: mockSignOut,
    },
  },
});

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn() }),
}));

vi.mock("@/lib/context/SupabaseProvider", () => ({
  useSupabase: () => mockUseSupabase(),
}));

describe("useLogout", () => {
  it("should call signOut", async () => {
    const { result } = renderHook(() => useLogout());

    await act(() => result.current.handleLogout());

    expect(mockSignOut).toHaveBeenCalledTimes(1);
  });
});
