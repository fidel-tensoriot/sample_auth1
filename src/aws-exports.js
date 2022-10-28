const awsmobile = {
    "aws_project_region": "us-east-1", // changed 
    "aws_cognito_identity_pool_id": "us-east-1:3850e842-372d-44ff-9a69-d36286bd6fe3", //changed 
    "aws_cognito_region": "us-east-1",  //changed
    "aws_user_pools_id": "us-east-1_vMd73c3qR", //changed
    "aws_user_pools_web_client_id": "20ma4kd59vk0n4479rovv48nqo", //changed 
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 6,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;