init:
	@echo "Initializing terraform..."
	terraform init -backend-config=prod.backend.conf

plan:
	@echo "Planning terraform..."
	terraform plan -var-file=prod.tfvars

apply:
	@echo "Applying terraform..."
	terraform apply -var-file=prod.tfvars --auto-approve