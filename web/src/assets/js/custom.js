function toast(){
  return Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
}

function highlightCurrentPageInNav(){
  const prefix = "/admin/";
  // Split route
  let routeFromAdmin = location.pathname.split(prefix);
  let highlightRoute = routeFromAdmin[1];

  // Split the route after admin e.g. "some/thing"
  let routeWithoutAdmin = routeFromAdmin[1].split("/");
  if (routeWithoutAdmin.length > 1){
    for (let i = 1; i <= routeWithoutAdmin.length; i++) {
      highlightRoute.concat("/").concat(routeWithoutAdmin[i]);
    }
  }

  console.log(highlightRoute);

  // Add active class to the properly link
  $('#sidebar .nav-sidebar a[routerLink="/admin/dashboard"]').removeClass('active');
  $('#sidebar .nav-sidebar a[routerLink="/admin/' + highlightRoute + '"]').addClass('active');
  console.log(highlightRoute);

}


// Shorthand for $( document ).ready()
$(function() {
  // highlightCurrentPageInNav();
});
