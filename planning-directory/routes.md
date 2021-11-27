## Routes - REST

### USERS -> SPA

- B - GET       /users               -> NONE
- R - GET       /users/:id           -> Profile
- E - POST      /users/:id           -> NONE
- A - POST      /users               -> SKIP
- D - POST      /users/:id/delete    -> SKIP


### MAPS -> SPA

- B - GET       /maps                -> All public maps
- R - GET       /maps/:id            -> Single Map page
- E - POST      /maps/:id            -> Edit single Maps
- A - POST      /maps                -> Create a new Map
- D - POST      /maps/:id/delete     -> Delete single Maps
