**************Explain Folder Structure******************

Folder Structure -
src

- app
  - providers
  - routers
- services
  - API Calles
- components
  - Layout
    - Header
    - SideNav
    - Body
- feature
  - pages
    - Dashboard
    - WatchList
    - Markets
    - Auth
- hooks
  - useEffectHooks
  - useProviderHooks
- providers
  - RouterProvider
  - AuthencationProvider
- context
  - AuthContext
  - RouterContext
- utils
  - constants
- types
  - API Response type
  - UI
  - Response Wrapper

*******_********Component to API communication********_
Component -> useMarket(useEffect) -> marketService(Fetch Call)
All API Data should first enter into Wrapper of Backend and the function should return of type the UI really wants
Types -> Market type(UI) and Wrapper(Backend Layer)

******************Using Contexts ************************
Context to be created
Provider should be a hook(Provider should have all the logic)
Component should only consume this provider Hook
Provider should be wrapped across accordingly to respective element

_****************Creating Routes****************_*
<Header/><SideBar></Outlet>
children should contain what gets rendered inside the outlet 
RBAC should be places about the chidren this RBAC should be a provider again
