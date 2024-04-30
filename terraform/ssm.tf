resource "aws_ssm_parameter" "frontend_bucket_name" {
  name        = "/${var.app_name}/${var.env}/frontend_bucket_name"
  description = "The name of the S3 bucket where the frontend is hosted"
  type        = "String"
  value       = aws_s3_bucket.site_bucket.bucket
}

resource "aws_ssm_parameter" "cloudfront_distribution_id" {
  name        = "/${var.app_name}/${var.env}/cloudfront_distribution_id"
  description = "The id of the CloudFront distribution"
  type        = "String"
  value       = aws_cloudfront_distribution.site_distribution.id
}
