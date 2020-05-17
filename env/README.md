## Introduction

The 'env' directory contains all files neccesary to create the environment in which the application will run. The environment is captured within the `azuredeploy.json` file. Configuration values that differ accross environments are placed within the `azuredeploy.parameters.json` file to make them easily managable. Examples include 

## Release

### Prerequisites

- PowerShell Az module
- Access to Azure subscription

#### Steps

1. Log in to the Azure subscription using Connect-AzAccount cmdlet.
2. Create a new resource group deployment with the New-AzResourceGroupDeployment cmdlet.
    - Refer to the location of the template file using the `-TemplateFile` switch.
    - Refer to the location of the template parameter file usig the `-TemplateParameterFile` switch.

>**Example**: New-AzResourceGroupDeployment -ResourceGroupName wouter-fa-rg -TemplateParameterFile C:\GIT\huureenarts\env\azuredeploy.parameters.json -TemplateFile C:\GIT\huureenarts\env\azuredeploy.json -Name "depl-1.0.0.0"
