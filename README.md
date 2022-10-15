1. Frontend:
    - Application URL: https://d2s4vtjjdp7wcf.cloudfront.net/

2. Backend:
    1. PR: https://github.com/sujit-epam/jscc-aws-backend/pull/2
    2. APIs
        1. GET https://9hm5ojtl48.execute-api.us-east-1.amazonaws.com/dev/products/: Gets all products with stock count
        2. GET https://9hm5ojtl48.execute-api.us-east-1.amazonaws.com/dev/products/{id}: Gets product by id with stock count
        3. POST: https://9hm5ojtl48.execute-api.us-east-1.amazonaws.com/dev/products/: Creates product from request body json.
        Sample POST request body:
        `
        {
            "description": "Test Product descrition",
            "id": 6,
            "price": 66,
            "title": "Test Product",
            "count": 77
        }
        `


