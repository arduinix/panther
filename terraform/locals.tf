locals {
  app_env       = "${var.app_name}-${var.env}"
  app_env_alpha = "${var.app_name}${var.env}"
  fqdn          = var.domain_name == null ? "" : "${var.subdomain}.${var.domain_name}"
  # fqdn = var.domain_name == null ? "" : var.domain_name
  content_securty_policy = "default-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self'; img-src 'self' https://ddls-cdn.s3.amazonaws.com/ http://www.w3.org/2000/svg; font-src 'self'; media-src 'self';"
  enable_logging         = true
}