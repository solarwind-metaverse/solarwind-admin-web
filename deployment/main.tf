provider "aws" {
  region = "eu-north-1"
}

resource "aws_security_group" "solarwind_admin_web_sg" {
  name        = "SolarwindAdminWebSg"
  description = "SLW Admin Web Security Group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Allow SSH access from anywhere (for example purposes)
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    ipv6_cidr_blocks = ["::/0"]
  }

}


resource "aws_instance" "solarwind_admin_web" {
  ami = "ami-09f8565d2a284cc1d"
  instance_type = "t4g.small"
  security_groups = [aws_security_group.slw_admin_web_sg.id]
  key_name = "SlwAdminWebKeyPair" 
  subnet_id = "subnet-05c28aec47e4d0761"
  user_data = file("${path.module}/user-data-script.sh")
  tags = {
    Name = "SlwAdminWeb"
  }
}
