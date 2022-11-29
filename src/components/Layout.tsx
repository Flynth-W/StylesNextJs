import { ThemeChanger } from "./Themes/button"
export default function Layout(props:any){
  return (
  <div>
    <main>
        {props.children}
    </main>
    <ThemeChanger/>
  </div>
      )
}

