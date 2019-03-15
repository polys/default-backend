# Default Backend

For [custom errors](https://kubernetes.github.io/ingress-nginx/user-guide/custom-errors/) with [NGINX Ingress Controller for Kubernetes](https://kubernetes.github.io/ingress-nginx/).

* `/healthz` always returns a `200` status code.

* all other paths return the `X-Code` received from the Ingress Controller or `404` if `X-Code` is missing.
