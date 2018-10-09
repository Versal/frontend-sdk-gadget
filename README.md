# SDK placeholder gadget

Versal's SDK placeholder gadget

## Summary

The SDK gadget is a placeholder gadget that player injects during developing (using `--sdk-server-url`). Since the platform doesn't allow injecting unpublished gadgets into courses this gadget provides a shim to get around that. The gadget stores the "in develpoment" gadget config inside the config of the SDK gadget and the player does the work of detecting this and launchng the "in development" gadget when `--sdk-server-url` is provided.
