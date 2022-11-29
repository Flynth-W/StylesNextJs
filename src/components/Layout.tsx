import { ThemeChanger } from "./Themes/button"
import { Header } from "./Header/main"
import { Footer } from "./Footer/main"

export default function Layout(props:any){
  return (
  <div>
    <Header/>
    <main>
        {props.children}
    </main>
    <ThemeChanger/>
    <Footer/>
  </div>
      )
}

