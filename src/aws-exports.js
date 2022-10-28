const awsmobile = {
    "aws_project_region": "us-east-1", // changed 
    "aws_cognito_identity_pool_id": "us-east-1:48691bd0-4131-4613-bedc-508ac6570e9b", //changed 
    "aws_cognito_region": "us-east-1",  //changed
    "aws_user_pools_id": "us-east-1_0WMUbIOqW", //changed
    "aws_user_pools_web_client_id": "6hssc8r3l2mepam974l038btu0", //changed 
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