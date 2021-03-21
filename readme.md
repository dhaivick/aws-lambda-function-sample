# Getting started with aws-lambda development locally

- Install serverless globally.
	- npm i -g serverless

- Create a project folder, navigate into the folder and type
	- sls create -t aws-nodejs
	
- Go to AWS console
	- Navigate to IAM
	- Add a new user
	- Fill details
	- Give programmatic access
	- Attach existing policies 
	- Generate keys(Access ID and Secret Key)

- Go to local terminal, Type 
	- sls config credentials --provider aws --key your_key --secret your_secret
	- This saves credentials locally in ~/.aws, which is sent with each request.

- Go to serverless.yml, Configure handler name as per your preference.

- To run the lambda function locally. Type 
	- sls invoke local  --function functionName

# Load testing serverless functions.
- Install artillery,
	- npm i -g artillery

- Create a test.yml file.

- artillery run test.yaml
