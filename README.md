# portfolio_infam

Déploiement GitOps avec **ArgoCD**:
1. push sur `main` -> tests + build + push image sur GHCR,
2. le workflow met à jour `helm/portfolio-infam/values.yaml` avec le nouveau tag image,
3. ArgoCD auto-sync et déploie sur k3s.

## CI/CD GitHub

Workflow: `.github/workflows/ci-cd.yml`

- `test`: installe les deps puis lance les tests.
- `build-push`: build Docker Nginx et push `ghcr.io/<owner>/<repo>`.
- `update-gitops`: commit/push du nouveau `image.tag` Helm pour déclencher ArgoCD.

Le trigger `push` ignore `helm/portfolio-infam/values.yaml` pour éviter une boucle infinie.

## ArgoCD

Manifest Application: `argocd/portfolio-infam-application.yaml`

Application ArgoCD:
- source: ce repo (`main`, chart `helm/portfolio-infam`)
- destination: namespace `portfolio-infam`
- syncPolicy: `automated` + `prune` + `selfHeal`

## Pré-requis cluster

- ArgoCD installé dans le namespace `argocd`.
- Secret pull GHCR `ghcr-pull-secret` dans le namespace `portfolio-infam`
  (le chart référence ce secret, mais ne le crée pas par défaut).

## Déploiement manuel ArgoCD (si besoin)

```bash
kubectl apply -f argocd/portfolio-infam-application.yaml
```
