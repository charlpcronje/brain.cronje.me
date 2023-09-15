from fastapi.middleware.cors import CORSMiddleware

origins = [
    "https://sub.domain.com",
    "https://sub.domain.com:5050",
    "https://sub.domain.com:5051",
    "https://sub.domain.com",
    "http://www.sub.domain.com",
    "*"
]


def add_cors_middleware(app):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
