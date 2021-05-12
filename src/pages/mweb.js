import React, {useRef} from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from "react-helmet"

import "../styles/mweb/main.scss";

import DynamicText from "../components/DynamicText";
import SummaryCard from "../components/SummaryCard.mweb";
import DesignationCard from "../components/DesignationCard";
import ProjectCard from "../components/ProjectCard";

import photo from "../images/keshav.jpeg";

import thirdPhoto from "../images/1_cropped.jpeg";
import secondPhoto from "../images/2_cropped.jpeg";
import firstPhoto from "../images/3_cropped.jpeg";

import hemaPhotoMin from "../images/hema-min.jpeg";
import gudduPhotoMin from "../images/guddu-min.jpeg";
import papaPhotoMin from "../images/papa-min.jpeg";
import momPhotoMin from "../images/mom-min.jpeg";

import hemaPhoto from "../images/hema.jpeg";
import gudduPhoto from "../images/guddu.jpeg";
import papaPhoto from "../images/papa.jpeg";
import momPhoto from "../images/mom.jpeg";

import contactKeshavPhoto from "../images/contact_keshav.jpeg";
import contactKeshavPhotoMin from "../images/contact_keshav-min.jpeg";

const Mweb = () => {
  const scroll_button = useRef(null);

  const handleScroll = (ev) => {
    let scroll_width = ev.target.scrollWidth;
    let scroll_position = ev.target.scrollLeft;
    let scroll_percent = parseInt((scroll_position/scroll_width)*100)+1;
    scroll_button.current.style.left = `${scroll_percent}%`
  }
  
  return (
    <div className="mweb">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Keshav Kumar | Javascript Developer</title>
        <meta name="description" content="Keshav Kumar is a Software Engineer works on Javascript and frontend tech. Graduated from IIT Jodhpur and currently working at Practo Technologoes" />
        <meta name="keywords" content="Keshav Kumar, rnmKeshav, Practo, IIT Jodhpur, Javascript Developer, Sitamarhi" />
        <meta name="author" content="Keshav Kumar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="canonical" href="https://rnmkeshav.in/mweb" />
      </Helmet>
      <section className="hero">
        <div className="card">
          <div className="photo-container">
            <LazyLoadImage
              alt="Keshav Kumar, @rnmkeshav photo"
              src={photo}
              className="photo"
              placeholderSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAFBQUFBVUFpkZFp9h3iHfbmqm5uquf/I18jXyP////////////////////////////////////////////////8BUFBQUFVQWmRkWn2HeId9uaqbm6q5/8jXyNfI///////////////////////////////////////////////////CABEIAyAEsAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/2gAIAQEAAAAA6gWVYCKQoCUAAAlKRQlCAJZRQOXPzUAAAAIAAA+gAUQsFQqKAAAAUSZVqxQSwACg5Y8tAAAAIAAAPoAKEAWUIolAAFQZxnGZJpdau+lEpEFCg5Y8wAAAAgAAA+gFAJZYoSoUhQAExq444JE1UirevehCWUKE548wAAAAIAAA+gVKAAARQhSKA5TeOWJvWcJdzKBW+/VUAChOfPzgAAAABAAD6AKBKABBRFEoJjF41z66Y5y9ZiEqBvv2sBYBTly4AAAACAAAD6AKAWACKJUKhQ58tZz0xNmeLepioLBL6PQioApOfPzgAAAAAgAD6CwFAAAWLEUihnlm4dcSw4N3MqWhlU9PcACk58/MoAAAAAIAD30KAAlBSVEohSced1znbnqY3OKglVpmKensFQoTnx4KAAAAAIUgD6SJRCxRYKIBGohTjz56sx0zvON3lABpbIF9tsAqDnx4KAAAAAEAA+lRGQUApKgEpLFvHljNayazneueRRFoIOnssAKTnx4KAAAAAACA+kUMoWaQLAAIqpceQyBZLrMC1CJVix6u5AqDnx4UAAAAAAAI+jSUEKgAAAqDy4zAoRULVsSRLUWPdtAWVOfHhQAAAAAAAPoC2WAQAAAWEPLnMBQAu9EkzAsizXtoFE58eIAAAAAAAD6AoJQgACwAMzzTMC2wgt30pJJnMhAdfWBROfHiAAAAAAAA+gWAFIACwEoM8+LOS61bkkN63qoSTOJnMUb9PWChOfHhQAAAAAAAPoAALAAqAAJy5TMl306VmMxrWqoiJiZ5Qlrr6iUVOfDjQAAAAAAAPoAAAALAACcpjkb7b3ZGYVaBCZjnzSLN+1FUTnw5AAAAAAAAPoAAAABYACc+blN9+mqRIgoEJJJywix7dhRnHn5gAAAAAAAPoAAAAAAAzzzcc+nqtCQgAQiTGMZB6+ooZx5+YAAAAAAAD6AAAAAAAJxmuU6emhEEAQIkzjnkHu0CmcebAAAAAAAAD6AAAAWAAAnAzn0dgiCIAEJMYziWXfsoFZx5cgAAAAAAAPoAAAAAAAcMRPVuoQggCAzMYzIjr66FJMeXFAAAAAAAA+gKlEAAAAAcvPLfT0EICAIEjPLCI7+oFGceSAAAAAAAAPoAAAAABYBPLzX19CERSQogIZ4TKPR6QKkx4wAAAAAgKAPoBUAALAsAAOPnzfX0EIAAiKJMccsvb1BRnHjlAAAAAQAAPpRRAAACwAAnn4z1dgSAKCIEScMyX2boKZx44oAAAAIKAA+jAAAFQAAAY8me/pAgFBCIJJx5r6o7ApnHjlAAAAAAAA+jAAAAAAADz8OvqFRAUJJiM9NJHHHTpuTpQVnHjAAAAAAAAPokAAAAAAAni17KEEBJnHOF10upnHN6dRNaCmceMAAAAAAAA+gAAAAAAAHn4+61IiBJnDNtqrZxrPpm8mwpnHjAAAAAAAAPowKgAAAAABjyezec5kLdLIY55N5ehOW0x3aS6CmceMAAAAAAAA+gAAAAAAADz9ZjOct6ttmXLmb1lbr05kzOfbn001RRnHjAAAAAAAAPoVAAAVAAAAJJnAhh128/M10mLbe9TE59suk6ALnHjAAAAAAAAPoAAAAAAIoFxMcsxEeiddvDK3Wc6t7bTOefoY06Apnn5AAAAAAAAD6ACkAACwAAE54Z51gu+07Tzc2qTOq7dZM5592dtgVnn5AAAAAAAAD6AsAAAAAABhxuWcRbv0NzhxasMre/STOeXedM60ATl5KAAAAAAAA+jAAAAAAAAxxGMRd69F05eagyt9OpM55dd6z0AE5eUAAAAAAAA+gsAAAWAAAAeckxGrfRuzOPMoyvbqTGefTduwBOXlAAAAAAAAPoAAAAAAAAvnzUzlbfTtJnnwA7dSTOee+tugC45eWgAAAAAAAPoAAAAAAAAY5Q5xL29G4kZ5FurYkzjn07LoAZ5eYAAAAAAAA+gAAAAAAAA4ZYyZvt6WRDli3VpGZzze16AFY4+ZQAAAAAAAPoWWAFIFgAAAAnPlnFt6+iEnPO1S0JmYzv0UAGePnAAAAAAAAPoLCxZQgVAAAACWYkzjfTg25yb66sFSTOc312ABnhwAAAAAAAAPooBYAAAAEqCiEznGrnjlS61aulJnMxJ6d7FSxPPwAAAAAAAAPoApKQAAAAEoMaTOIzMJvOrEmr1oymJnFt79dHLlvs83EAAAAAAAA+gAAAAAAE0gFxM5nMrOjpjWJG+pmJmS81NdXCW7cgAAAAAAAD6AApAAAAA6s5zasxMuOb1qoRnGW+zKJmZ3OVKJVSAAAAAAAAPoKgpAAAABDZkTM2zOGG9WF1TOcztM2ZTOuk4wsqLShJAAAAAAAPoAKgAAAAQSW0mWk4c9d91BJI553csyM9644KEtBVM5AAAAAAD6AsAAAAACVGG6TF3Zz1CEErPK7mZB3OGAsstAoqYAAAAAAPoAUgAAAAEnL0Y53dYN6ZMc+eUrfTUzzm7iE76ThgUFFKAmAAAAAAPokVAABKAARjlPVjjjp0onQzXPhyLevQxnOmZZ16WZ4ZFKAUhVMQAAAAAPokAAAAACW8+W+ucc+W+9rLS46ZnDOpu2zGYYO29JnzwWLQKEAsyAAAAAPowAAAAAArTEzjhnr02cd9LnVw81tmtTGYzNdd2pnzBYtChmW0ISAAAAAPowAFgAAAFnRnBM88TrtOfdTLPDaEmCdN61UY84qLRQyqlISQAAAAD6AAAFgAAFmplWYnOa1c57a3xZ15pUiRrpu1UnPiKS0FZW3fWhMcs5AAAAA+gsAAFgAAMY7zC2pCjHO9ZjbOPOqF6b0VYnDAoVZNMtb72oqSuPCAAAAA+gLAAAAADjh3nHfSgEkxnPXpcTyxLretWlIz5hUqiaZdPRaIAcOAAAAAPoAAAAAATjmO5ltVSCTLpd8+Fzja6tKhOGBQpnVk9HWoEyW08mAAAAA+gAAAAABnlnL2WSYzrYktRi9N55YxLbbVgmOAqUrN1Hr0XGOeCBevXn5gAAAA+gAAAAlAGOUzv1RBm1MlsTnrdvmi1VqLJwyKFSbPVTjzhABr0eSAAAAD6FIAAAAAcsSa9ERaEQqRzx1c5KttBOOAoVjdno6XlwIAA645gAAAD6MAsAAAAHGYj0C1VkQCSZrElt0Ic+QUFit+l58SLSAB04gAAAD6MAAAAACcpiS7a6UEAESXGYtoOfIFCs6PW80zLaQAHXjAAAAD6AABYAAAzzznMdO2JrdIACIziKFcsAoLKd9cM5XQIAG84AAAAPoAAAAAAxiZxHt3JBIAKkic8gTEAoVNS9uOZbQIAFzAAAAD6AAAAAAM5xySe6wCQqCkymeASAFBZU3My2lhAAJAAAAD6KAAAAJQM5nDFdu8tEgAqGWefEABQXOmdzN0CAACQAAAA+gAAAASgM5mMYO290SkABInDmAsVYBYuboEUgAMgAAAD6AAAABFErOZmTOI1vtaLAAJE82QClgsWWNGkLUAjIyAAAAPoAASgASxZTnhIYwTt3hVAAkTHCAosC50M6t0zLagAZjIAAAA+gAlAACVFDliTJJkvtyKoAEicOSrYLAZ3LneqmWqIADCQAAAA+gAAABFRQ5YkkkTK+yxVAAgznzqIakFk1LOlmZdVBAFJlkAAAA+gAAABFQU45kkkhl7dSKoUiUiTjgQtkFgW5KAAF0mUQAAAD6AAAEosQFOEkjKQfRxnOWrVBCokxyzQrIXNhqS0AABq5mQAAAD6AEoAAEAOOUZiSOnuznOZjWtVRAIzwgWzJLcajUUAAAXUzkAAAA+gCKAABFijzxJEiTfuzJnOZNb1aQBJy5hbmI1FzSgAKgDTMgAAAD6AJQAlAQCzhmpEiTt6syZzJnGunTRIKSY4i1nI1N9+GZaQAVAE1cpAAAAPoAAAAIAPPBJIj1dcpM5zMTt00JKpGOMLWINZ7b5QQAKgBLckAoAAPeAAACWADzyyZiF9tzEznEznfbYCkk54i3Mha7ZwQAFSFBFiwAAAD3gAABFgA89Iut2tZkmZnOcyNesCkmZ0tM5hu8WMgBFqQUICwAAAE+gAAAEABWipmZzveZJmZznMR6tiUJJdq5wbnLhrcikQtkFAgAAAAg+gAABKIEot2SZznOHouUmZMZxKz39EQqLJMdzEGpz4er0zjxzIb3jKAUIBYAAAg+gAAACABd558sZzDp7cxJMzGcSpv1oEKmca6zELZy4+rujma3rOMaTGMgQBUAAAI+gAJQAIAC8vL05RbfT2wiTOc5xCvaQSjOc3pMY5LrOXo9PPnnO+1S1QMznzzACwAAAT6ACWKAEAAvHleMul9rMRJnOMQr17klBHTjlxkKjepIhb17aBQTz8QCoAAAPeAAAIAShy5TldL09WckiZznnBe/eSUJezjjGMQN0iIodOm9WgTj50oFgAAA94AAAEAEnlZb1u66ZhIzM55wrr6JCo31uHmcsQXUaIAg1u3e6PLyUAAAAD3gAACACU44Sa1HTrnKySSY5wXp7JiQvfTG+eOHPMF0KBABI307a8WRQLAAAD3gASgAQA4YxN7mOt7ZiyMs4wymvX16yHPtMdMWcvIYDpYlAEEgL05AoKgAAD3kUAAAgBPPyna4y7Y9CKyzJjGUenvhvvjj3m8zWeHmGZDsQAIiFAgKBUAAA95FAAACAPJOszmb1jXVbJGZnlEepsnfl06Z3zvk5AxF9OcEASFAEazQBUAAA9wKAAAgA4syJ0zhvrRJnM5Saz33rUj0ef1Y3x82AI73UzjMEUgoEei3z4UBUAAA9wUAAAEA5ZkSdMZjXbSJnOMTr6fI726xbnfTj55Ci3e6TGMiFABOnpzHkBSkAAA91SkKAACAZ5pM56zEhvtZJMc5v13n5PRpUlzrzCgDW6LSTLMgA7d2OPKAqiAAA9wKAAQABjDOHVzkka11SZ55m/bHlndbM9ceUUAS2ki6ttTnBA11ccgKRYAAD3AsUAEAAcsYzem8ZzIatskzJfZpjyb7auWOClACW1EkW3VsxATJVFECwAAPcCgAEKQDHDGN71cSSFsJEO3pTxr1rnzoUAEFokWmriBmAtAFIAAPcFEoEpKCA5cuTrOkzJIKkEHs3MebczKBQAMWktUti2YGSBQUogAA//8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAgBAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEUAAAAAAAAAAAAAAAAAAAAAAAAACBQAAAAAAAAABAAUAAAAAAAAABBFBFoAAAAAAAAAQAAUAAAAAAAAAgAAKAAAAAAAAARKQKEqgAAAAAAAAIgBRC0AAAAAAAAAkAKIWxQAAAAAAAAJACiKjQAAAAAAAAEIChFRoAAAAAAAACAi0RA0AAAAAAAABm0kpSIstAAAAAAAAAkoAEUoAAAAAAAAEigBCzQAAAAAAAABlQECpoAAAAAAAAAyAAWgAAAAAAAABkUBC2oAAAAAAAABEUAhaoWQAAAAAAASUAABoKEgAAAAAAGQoAAtFAkAAAAAAFwBSoBLoUASAAAAAAQhKoFSF0FAEgAAAAAMgClEgugoZkNWAAAAADUxKpChAaoLJkC0AAAAAtYgAqAXQDC6oSAAAAAFrmFCADVBcNUBIAAAAAtTAKIA1QEqgJAAAAAFrOQKIpaACgDIAAAAArABQ0AAoAZAAAAAUGAFFoALAAgAAAADRDMAC6ABFAEAAAAAaEZyUA1QAUCCAAAAANCM5KAXRYBQBCAAAAAaCZyW5UG1QxugAhAAAAANVDnC6kAqoNgAQgAAAAFWpzDVmQBK3QEUggAAAANEZgaMgtyprQARBAAAAAWysQNLgLaCoWrBIEAAAADS3PMGiItUCgVKkCAAAABpZMA3AC2FAILAIAAAANBnIaALSXUgRQuQIAAAAaCTJaAtC2wiAtzAQAAABaITNoClALamQQCAAAAFpAEKBQgt1ZmQAIA//xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oACAEDEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQgAAAAAAAAAABQQAAAAAAAAAABQIKQAAAAAAAAACgAsIAAAAAAAAAFAFBIAAAAAAAAAKUABIAAAAAAAAAVQABkAAAAAAAABSgACQAAAAAAAABVKCASAAAAAAAAAKtAQCQAAAAAAAAAtoEAIuQAAAAAAAAW0BEUKwAAAAAAAABoUJChWYAAAAAAAADSKqQKKwAAAAAAAABpBUBQZAAAAAAAABVQpAoSAAAAAAAAAWgIKJZAAAAAAAAAGgBREuQAAAAAAAADVBBSJAAAAAAAAABq2SAoSAAAAAAAAAUtZUIpCAAAAAAAABqxYKICLkEKAAAAAAAbsQACKyCBQAAAAAAN0hEKgpkBBQAAAAABbQEQCjIAQUAAAAADVQohEaCQAAAAAAAANiCkSgSAFIAAAAAAGqCKihDIBYQUAAAAADYgKATIABBQAAAAAXQIChMgAAAAAAAALoCAEgAAAAAAAAIrYCBIAACCgAAAABBboCBIACABQAAAAADVAgZACAAUAAAAABdoAiQAABCgAAAAANWoAjIAAAlAAAAAAaoihGQLAAEoAAAABCOoZWhJAAAAAAAAAYSN9RJLoIgMygoAAAAAAxpWqJJdBGbBMVILbVAAAAAEo1QwbESABM5B0oAAAAAJL0BgtGQACIy3QAAAAAStgwAAAhQlAAAAAAF0GAAEzqgBmaoAAAAABdEyABGVFAxN6AAAAAAFrIAAISLaRQAAAADUgAAAAEkaoAAD//EAC0QAAICAAUDBAIDAQEBAQEAAAABAhEDEBIgMSEwQRMyQGBQUSJSYUIjgWJx/9oACAEBAAE/APseJ7PuDaNaNcTXE9RGpFr8Biex/bHJIeIPFHNlmo1PKy2KTPUYsRnqixUJp+fl4nt+zOSRqEWkPESHiM1PPjYsrRefQstixZoWOJr5GJ7Pss5ii31ZaQ8UlNsvJRyZ5zoUaH2bITcRYsRNP42L7fp6yfw5zIUurHNkm2zSUMjHJjVLNCSiN91Sa4ZDF+Li+36a/jSYxIkyC65SIrJDJjERybGLuWQxPD3PvYvt+nJfEbGyLRZIulYuEMicWXlLOzhZLJ9myyjgw8Xw/gvLF4+m0V8NuhtjEy/JLk8FkvAhifURLJZPffbwp2vgPLF8fla/BLs2N2zksQ3wiXOV9GyxcF9GIXLH8aEnF2Jpq133li8L8xW+91/BfanPwSZeSG+pYxvpmslzk+e7fZhNxF3nli8L83RX4OTpDeX72LLxleayfx8Kd958ZY3j69Ziy6jWzxkt630UJFFFd1OmQmpLuvjLG8fl1tv8A8mT97H8NCTNJwUUNdl7YycXaIyUl3HljePqddpMY+rbH2a7NCQkUUUUUUUaSiu1BuIna7b4yxvH11om+h5Gr4HtSNJpEihooaKKEhRFASzoooooo0jRRQ+xF0yD8dt8ZY3j6bXwZo0sQ3mhIURIo0mkoroaRooUShdtoooaGuxB9t8ZYvj688p9NkYiQkJFFFFDRRRXwWSXYg6Yn2pZYvP11jPJLqVkkQRXzGNdiHC7UssXn6NXx2MfB4JUhEerEvmPJj34XsXalli+766yTOWcIfVjMNC+axj3Ij7V2nxlie766x8jH1oXl5QXzmWPdD3Ee0+Mp+5/XpdGNl8jfShckfnNj34SuQu1LKfuf16aHkxckfm0OI1vwO3LKXuf15roTVPNEPntElW7A7csny/rzMRWNZIh+Akt2DGl25ZPl/YMSNMYjD/AMlzmyMWxNoTvtSyfP1Jd6atDQjD/AAM8mRjZGNIZF0+08n9hxYecsPn4tocjWahv/RSkJ3seUxI0EY7Fx2X9jatMapkHUlnXesbHMcxzNRbLeSf+CZebY5nXkj1kJZLOPZkP7HixFyLZZZZZZe5ssts0Tfg9Of6Z6Ez0ormaKwv2z/yXhn/l/qNCftaZWbY5XwKJJdCHu2PKPZkPh/Y8RXF5Q9qLochyNRrNZrFIsvOmUv2NwF14gepGI8djxZvyW35Ky6DYiL1885SdIqUxRSyfBD3ZWix5LssfD+x1ZiQowvYSZaGxs1FTfCYsOZprmSLgvJrj+jWamxjKSWqRPEci80smJZxbTTG10H12x94xvqLNdmQ+H9kklJEFSHGxw/bSNEPMysH/AFinCPED1h4t8xRqw3zA0Rl7ZDTTEyJRXUxJXLYlmxbF1is2MYveVY0IR57Uh8P7I3QpaeeWSnIeTY7yvOD9RaXyLDmRg1y0Uv2fxHlRQs2LZD2vNjGf9IRWSFz2pD4f1l9puj9yZ/rGh5cD2w6NMxG9XJDJk1Unmlse3D87GMYuCxps4RHtSJe1/Wb7TuzE9uyh7KKEJJqJFVk0YitJ5LtYfD2skR4F1ece1Il7X9jomv47XtSFRDhCzf8AvDHFqTXbiqilukLhCQ33JE/a/sj43UUUJZLkXAlm1Y42v93vOEfL3MkR4E8lz25E/a/sslTe+xPJEeXtaJR1f/3cxRb4RHDS53MYyHGa57ciftf2Wa2t7LMP9kVuocU+UOEP7Hpr+8TRH+6NMP8AWfx8R3sY8oZrtsn7H9lZKNZt7Um3SIQSXZmiihC7DGMiJi6iXbZie37KzlEoMY81GT4TPT/bIVdJZWWWWNjmeoKdjdlFdl5eRmF7il+u7Ixfb9mWTSHGP6KS8ItrhIcpPzlHoxzJYkhYzPVR6iHOzWXYkKkX3GMg6kJruyMXj7MtjGMSzlyVkuMqysts1Gs1Ce55seSk0Rxv2a4/sTT4fakYvC+zLytrYl5GxsvYuMkM8HjKxMT6ie1jyebzTaIYv7FJF5zxdJ60hYwpp8MkY3j68k2aRrcsN3Y4pZsq2MbyoopmlspmhiQomnqNFDWaFsYzwPOhqtlinJeRYxPF/W1TaJvUl9eXRDyeSdFotFjY8meCbyQojQs72ahtDaLyjk82PJ5ecmu819dTLLHtdosqsmjwS6PK2hTbE5fplvLUX/jFq/RpkzQaEaUaUOBpI85PNl7IK3k0SVPvXneVFP6u7LLL2UcOxPNonF5JEUsuhSNKKWd7Xknn4L2xVLOfK33mu3SHH6q2kKPS2NUJl7HkmLJo9OFmiK8Zs1Gs1ms1GosvNjYhDPGxkFb2YnK2rau7yOP1JySLtobGOVCkhMsb2LNiY0MczWOTNRqZqZqYmLNjFlYx58siqWyfO1fFaGvpzlQ2Xk1Y4FURl0E723T2MTsY4JsnhtbUhLOsnm+MnnGNLbP3bUMXde282vpiVk4NCi2ei82xjZCRexohIvNOnk8pxp2JI0o0iSLQnlIfYjGtjGPl7n8OnlZY0vpbgnwyLlwxIY8mhwJRaEmRfhiZeTJJ8og7WbQnebSY04vLrlfXJDdi5G8rLyURRW57V32y8q3VlY1+OfylFMcZQ4zb3OA0JtMTzaPaxPNqsmImrQsryvqORZeyrFES3y4e1D7rfd4+joeGhSknTLG9tZtJjwymvAmWWiSTItroxCGXlwxk+jEyyyyyxvNRFErsT4+Glmk2LCmxYC8s04KLwf0asL+pqw/6j9E9OD4kPBkNNHA/yl/BmxTaIzUx9Cy91b22NEZikSkhMQ0ImrRZe3kUSMRLtTdv4LYllGEpCwYr3MU4r2RKxZGhLmReCj1I+InqP+h6j/oep+4GrD8xEo/8zGn/ANIlh+UV9Flzkm0Rmp9JE4NGpoUky+64iT/Y01ISFk0xklTZWdCiKKEu3J0tq7jEiMHLhCwox6yNUn7EaIrrNmv+kSsSXLNEFyzXhI9X9QPUn/Q14n9D1J/0PVXmBeExRa9si/2qZiw8j+hvgeyE/DJYavoOMf0cCkXvvZRQ42iIsqJIa6iiTikJFFZLtzdvuPJZpWQwXyzV/wAwRpius2XKXtVIqEeXbNcn7Ymib5kaIeZGrCievE9c9dnrnrryj1MJihB+yQ3Je9WjlftE402voch7IRUVnQ4pjh+mfyXKFJPa98l5RGViybTJxoTJd+UqW1dhiWai5OkKEIc8lSnz0RfiCKSf9mP/APUqR6mGuEPHkOcn5L7FkcaSFTVx/wDqMVWr+hz2YauaG9+lFLctzTTtEcRGtESStZ13WyTt9xizScnSFUf4wP4w6t2ypS6y6IcoxQ8V+BtvvRk4u0dJIa+hS52Yb/mi/iMcT2sWIhysZZZfcnLauys4QbRdfxghJR/1k8X4WG6dGJ7n+OXxHk8k6aZZZfxKNKKGhoortzl3WJZwhfV8HWS/URyjFEpt538GfVKX0F8ZPYpNGs1imhP4zXYvZKfe5efLIwUUtROX7G23lfw49U0P6BLjJj2Qg5npIeCjRJcMTa5E/iPbZeyyUt63sSzwkOSh/shtsvOvhQdSRiKpP6BLNjzwukFsaK+LJZ3sschtvurbCLkyU0lphk3kl8V/QGUMbLHlB/wiWX8V5tWO0WajUai32lvYsmKVRpZN5V8Z/QHk0mSjleWFPx8uce+u43kl8d/hV8t5tDRWaxRTixP5M418NDFkxDyS+sPN5tbFJoWKxO1fx2rJKn3FvZHYxLYolFFFFdqiivxK+Kt0mWajUXm1twZePkTVr4bFwMQ9lCVDY38Fr86t0ud97U6afyGTXaW5DzeTFErLgbzr6nLnu4buCH8eStdpbkMXOXkYuc2y8lnZZeyyy+w8n9Alzue1oRhKo/HeU1T7C7DEMQyI2X8Oy/osu4lbKpJD2W0Jl/CkrXZe5jFwMRy/rku5h+9ZPY8tRqL+Ax9h7UMeTEcfJWT/ACz7TJC7eH7lseby4FNCZffmu6hkU5NJDTWS+Ws3+eZIXbwV1yebyeTyjNR5QpxE+9Lu+MsJuLuh40HyiUlLhZ18lfmGPsPglusvbgoY83k8mMTpilhMSw1wxd1j53PsYU9CdoeJh/1G7d/MX5h9qXbSZBVFZPN5PJ5wcPIo4L8iSSpPvSRT2vakMUZPhEJqC0zRKUH7V9XfYfOVFFGhsWDI9AWDE9KBph+kdP1kx7GMeT2RdNPvrFj5ReCxYeGz0YnoxHgI9CP7HDCjyzXhLwasF+CKwRywUPG8RQsWGmpIbXhFl/Ul2uRYaNEf0aY/o0opZWNmo1Goj1e55PJj2wdxXejpT/kaMJnoxPSf9h4Uv7DwZ/2PQf8AY0YUeWa8JeC8FiwsNocMJDml0gs1gzY4SRWVdq/pN7lztssbGxsbX7FJWR4H2Hk9uE+8ylVvixYX6kaJ/wBhrG/ZWMenivmR6cI+5mrBP/Fnorwx4MFzIlKC6QywEix0yWEvA4tZWXmoTfCPQkOLX0hnjatnksbHiJDxJDxJ/s1y/Zqf7LecF1XYY8mPbhupd5iTeog21pTKxUasYcsYrGkenCPuZqwRRwpcHovxMeD+5E3BKo5YD5RR1LLHGDPRPQFgwFGC4RZY6Z6cTRE9OP6HgoeCz05/op/r4D/OeCbpM6s/5HtSMJdey8mPaujF3GO30R1TVHK/1HrSpM9djx2PFmy89cv2xtvPBegeJAeKh4jHJlkcVxFixZqNWVFdjSv0aI/oeFEeCxxa+joxV0FHSS9u5K2iCqI+wxjHug7iu5Tl0R6dKlyN/wArY7hKx8/5LsqLYopFlll7lJryRxf2KSfdasnCvo85i5JvdBdtjHuwn07LyUXIS0NVwanqpmJE5VeULyiXWnvUfLLL7ibQsVoWKhST89vGfT6NOVIbEMUWKIoGmKLRDrJ9xkt2G6ltvZYoPlmpKN5TVo98R3F2PTa/Q9yG/hKUl5FiyPWkesxYyNSfDL2YruXcf5qfU0lItFiRY2R5ML/oea3sZLdhq5IUP2ySNJoZTWViTkRikJp5R6Nxy9sv8ZiInSfTJ7Vz8ixTkvIsUUk+GMk+r+jNjkNlkVk2WR6RRB1JrtsY9qI4Lgk/J/NnQ0ocTQaUhQTbEUrPbL/HlNeVyhNNJjqXRmLNLN7l8tYjr6MyTGxJsUEhsbGJWxl8NCdrtPJ5PPAim2yWKa5MUpixRNMliJEcaTn1Ktpkv4tPKStEHayUasxcVcR2tbVx3rLL7b+jzIwbEkhvZBeR5RlXaeUh7MN1hC6ngpIaIycWLTJE4GHPUhq0Qfh8rKmp2iVU7ZPGb7SNBJfKeWh1f0WUf5bay4WyMqE97yY+R5aHV5YXt/8AohHPU8FJtWRbhI5R7JiJ9Klk56LTJzc+w0Qg5CwoihFcLJocENNfIUEVlONP6C83tbF1kS2p0J3ueTeeFC3bGk1ROGkwnyheck+pLhnI+sSErRi9UYE7VDlT6k8f9DbfaToUxNPa4ji0UUyvhYauRQ1k0pIf0KXG1sptiiooe6Lpid7mPKCUpHGU42jrGQmslyLyc/4xkfeSMOE1KzFl3rFJmtms1mtGs1otPLoaY/ocInpo0FPuYWcmojxTn6FJ5tjYo2JDY9y6oi6LLLGNjeeG6ktmJEhLwLJFdeTyxe8RPEURtt2/jW0KZrNZqNReTimOLXajiJCmv2PFRKbl9FchyHIivLE7ye9DEyyy2PYiErWclaJIhPwy8qG0iKoni+I/IorOyyyyyxrsP6PJ0iUh2WQjfVjEPtWWWXuwpU6POTJxcWJClJCknlcV5RPEvouPiWWWWXsordZyNbn9GY1fJJpcZUcKhdXlfZQ+1CVrLwYkdSIvx8hlFFFFPJWzqWXlQmUVsaGq/E//xAAjEQACAQQCAgIDAAAAAAAAAAABEQAQMEBQEiBgcCFRAoGQ/9oACAECAQE/AP77ir9KGo8IPpgeFj0M+y9rPPWsOhWpekXmCxxb5RmrM5aUh333Fknooj9RH6oNyLJNOMQi6kaIUOaTAHAFqhUgZZgGvN5RRRbtG6N0ouihuDfnws3RkHTG6Mg6Y4pg3Qii7ucpyE5COOMwD52aoTYNr97k4KMRiiMUFlRaYdDaOG+50YoBT8raxXHHQ6V0PceCkYnGKK4ou50RHQX3HT4inGcYjF2FDoRYIosVmcqkdXHonnugqRCMX//EACERAAIBBAMBAQEBAAAAAAAAAAERACAwUGAQEkACIXCQ/9oACAEDAQE/AP8Afc8rTDpA5OkDTToBtnSzoSi0NRUOPQxpCiii0cRcvSBZccf9UFpVqk5YG4ooqzoKgsH+BA6WLzjjjzQjunPuC4c+NLF054XTnhU9CcccFYrOb/Z8ik8i8Y46Hi1FyPMYp1MRjPLMZjM7TtHhCKRSaB4kJ1rGGZM+RaBjj4fhUQnWI8DCrgVn2LEg+Rxx3CVO0GIBoN9RRGfscccYrPHyDiQeHQfChFFw6esAwQ+feqn5f//Z"
            />
          </div>
          <div className="display-text">
            <div className="static">
              Hey There! I am
            </div>
            <DynamicText />
          </div>
        </div>
      </section>
      <section className="summary">
        <div className="card-list">
          <SummaryCard 
            image_url={firstPhoto} 
            text="I mostly work on tech related to javascript like node, react, Gatsby etc. and have been working on frontend technologies since 5 years." 
          />
          <SummaryCard 
            image_url={secondPhoto} 
            image_styles={{"objectPosition": "100%"}}
            text="Graduated from IIT Jodhpur with Computer Science & Technologies. After which i started my career as backend developer working on PHP." 
          />
          <SummaryCard 
            image_url={thirdPhoto} 
            image_styles={{"objectPosition": "70%"}}
            text="I like tech gadgets so reading and exploring them has become my hobby. I play table tennis, like cricket and watch marvel movies." 
          />
        </div>
      </section>
      <section className="experience">
        <div className="designation-wrapper">
          {/* <div className="card-list"> */}
            <DesignationCard 
              designation="Lead Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Jan 2021 – Present"
              description="I am responsible for the end to end consumer facing Practo’s UI and middle layer products. Actively involved
              in product roadmap contribution, engineering design and solutioning. Leading and guiding marketplace-ui-ux
              engineering team."
            />
            <DesignationCard 
              designation="Senior Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Oct 2017 – Dec 2020"
              description="I took care of frontend products like homepage, search/listing, public profiles, appointment booking, provider
              profiles, BFF layer along with aggregator layer service. Was involved in designing, developing and
              performance evaluation of complete product."
            />
            <DesignationCard 
              designation="Software Engineer"
              company="Practo Technologies, Bangalore"
              time="Aug 2015 – Sept 2017"
              description="Was responsible for internal tools used by sales team. Worked on backend technologies like PHP, MySQL
              initially and then switched to JavaScript full time."
            />          
            <DesignationCard 
              designation="Software Engineer"
              company="Fuziosparc Pvt. Ltd, Bangalore"
              time="August 2014 - August 2015"
              description="It was an early stage digital marketing startup. Developed a complete product from scratch using PHP, MySQL, JavaScript etc."
            />          
         
          {/* </div> */}
          
        </div>
        <div className="project-wrapper">
            {/* <div className="card-list"> */}
            <ProjectCard 
              title="Core Web Vitals Improvement"
              description="Improvement in LCP, CLS for all marketplace products which includes Practo’s
              doctor/clinic/hospital search, profile and all other transaction pages."
              skills={["Node", "Express", "Webpack", "Loadable Components", "Redux"]}
            />
            <ProjectCard 
              title="Online Consult Flow"
              description="Developed a user flow starting at doctor listing and profiles with available / unavailable slots,
              payment details to book a video consult appointment for marketplace doctors"
              skills={["Javascript", "React", "Fluxible", "Express", "Routing"]}
            />
            <ProjectCard 
              title="Listing design and performance improvement"
              description="Aim was to improve overall look and feel of the product with better UX and scalable design.
              Devised an optimised listing architecture for scalable and performant design."
              skills={["Frontend architecture", "React", "Engineering Design", "JavaScript"]}
            />
            <ProjectCard 
              title="Provider onboarding flow"
              description="A product to cater demands of different types of providers from their signup, profile details,
              multi doctor, multi clinic and its various attribute capturing for taking user live on practo.com"
              skills={["Application design", "React", "Redux", "SASS"]}
            />
            {/* </div> */}
          
        </div>
      </section>
      <section className="family" >
        <div className="horizontal-scroll" onScroll={handleScroll}>
          <div className="image-wrapper">
            <LazyLoadImage 
              src={papaPhoto} className="photo" alt="Ramnaresh Mandal, Father"
              threshold={200}
              placeholderSrc={papaPhotoMin}
            />
            {/* <img src={papaPhoto} className="photo" alt="Ramnaresh Mandal, Father"></img> */}
            <div className="details">
              Father
            </div>
          </div>
          <div className="image-wrapper">
            <LazyLoadImage
              src={momPhoto} className="photo" alt="Chandramin Kumari, Mom"
              threshold={200}
              placeholderSrc={momPhotoMin}
            />
            {/* <img src={momPhoto} className="photo" alt="Chandramin Kumari, Mom"></img> */}
            <div className="details">
              Mom
            </div>
          </div>
          <div className="image-wrapper">
            <LazyLoadImage 
              src={gudduPhoto} className="photo guddu" alt="Alok Raj, Brother"
              threshold={250}
              placeholderSrc={gudduPhotoMin}
            />
            {/* <img src={gudduPhoto} className="photo guddu" alt="Alok Raj, Brother"></img> */}
            <div className="details">
              Brother
            </div>
          </div>
          <div className="image-wrapper">
            {/* <span className="photo hema"></span> */}
            <LazyLoadImage 
              src={hemaPhoto} className="photo hema" alt="Mahi Shree, Sister"
              threshold={350}
              placeholderSrc={hemaPhotoMin}
            />
            {/* <img src={hemaPhoto} className="photo hema" alt="Mahi Shree, Sister"></img> */}
            <div className="details">
              Sister
            </div>
          </div>
        </div>
        <div className="u-t-align">
          <div className="scrollbar">
            <div className="button" ref={scroll_button}></div>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="card">
          <div className="photo-container">
            <LazyLoadImage
              alt="Keshav Kumar, @rnmkeshav photo"
              src={contactKeshavPhoto}
              className="photo"
              threshold={250}
              placeholderSrc={contactKeshavPhotoMin}
            />
          </div>
          <div className="display-text">
            <div className="stay">
              I stay in <span>Arekere, Bangalore</span>
            </div>
            <div className="touch">Practo Technologies, <span>Bannerghatta road</span></div>
            <div className="username">@rnmKeshav</div>
            <div className="connect">
                <div className="pure-u-1-2">
                  <a href="mailto: rnmkeshav@gmail.com" type="button" className="button email u-t-align">Click To Email</a>
                </div>
                <div className="pure-u-1-2 u-t-right">
                  <a href="tel:+919008001555" type="button" className="button call u-t-align">Click To Call</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mweb;