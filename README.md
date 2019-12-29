# Burger Builder
This web app is a dummy online order application. User can register for membership and sign in to build his or her own burger. Further, when user check out, he or she need to leave contact information such as address and email so that we can deliver food. And user can check orders he or she have made if he is authenticated. In this project:
*	Developer applied React.js (class-based component version) and Redux to build this single page web app.
*	Developer enabled CSS module, so that each component matches its own CSS file.
*	Presentational components (which don not maintain state) like UI and toolbar are in component folder. Container component maintaining state like burgerbuilder and orders are in container folder.
*	High order components in hoc file are for handling error, doing lazy loading and making component adjacent.
*	For redux, action creator files and reducers are in store folder.
*	Axios module is applied to do some asynchronous operations like send request.
*	Authentication, order and checkout pages are loaded lazily by react-router-dom.
*	Local Storage is applied to keep the ID token, so that user can keep authenticated for one hour.
*	Developer has done unit tests. Jest and Enzyme are applied to test a presentational component (components/Navigation/NavigationItem/NavigationItems.js), a container (containers/BurgerBuilder/BurgerBuilder.js) and a reducer (store/reducers/auth.js).
*	Developer deployed this app on firebase, and the database of this web app also from firebase. URL for this web is https://react-my-burger-34b88.web.app/.
