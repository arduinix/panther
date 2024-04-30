# panther


## Terraform Deployment
```
cd terraform
terraform init -backend-config=backend.conf
terraform plan -var-file="prod.tfvars"
```