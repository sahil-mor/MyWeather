alert("connected")
if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('/sw.js')
}