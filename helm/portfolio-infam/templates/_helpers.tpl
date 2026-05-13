{{/*
Expand the name of the chart.
*/}}
{{- define "portfolio-infam.name" -}}
{{- .Chart.Name }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "portfolio-infam.labels" -}}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
app.kubernetes.io/name: {{ include "portfolio-infam.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "portfolio-infam.selectorLabels" -}}
app.kubernetes.io/name: {{ include "portfolio-infam.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}
