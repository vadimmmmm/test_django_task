from rest_access_policy import AccessPolicy


class UrlAccessPolicy(AccessPolicy):
    statements = [
        {
            "action": ["create"],
            "principal": "authenticated",
            "effect": "allow",
        }
    ]
