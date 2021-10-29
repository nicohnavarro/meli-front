export interface Route {
  path:string,
  name:string,
  exact:Boolean,
  component:unknown,
  props?:any
}