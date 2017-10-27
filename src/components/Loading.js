export default function Loading({ hasErrored }){
    return !hasErrored ? "Loading" : "Error with API, please Refresh";
}