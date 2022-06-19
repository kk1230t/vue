{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "springboot-demoweb.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}
{{- define "springboot-demoweb.fullname" -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- printf "%s" .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create the name of the service account to use
*/}}
{{- define "springboot-demoweb.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "springboot-demoweb.fullname" .) .Chart.Name }}
{{- else }}
{{- default "default" .Chart.Name }}
{{- end }}
{{- end }}
