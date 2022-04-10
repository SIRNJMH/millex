import React from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import Apex from '../Apex/Apex';
import Tarkov from '../Tarkov/Tarkov';
import Valorant from '../Valorant/Valorant';
import Fortnite from '../Fortnite/Fortnite';
import Rust from '../Rust/Rust';
import Spoofer from '../Spoofer/Spoofer';
import Guaranty from "../Guaranty/Guaranty";
import SelectApex from "../SelectApex/SelectApex";
import SelectApex2 from "../SelectApex2/SelectApex2";
import SelectApex3 from "../SelectApex3/SelectApex3";
import SelectTarkov from "../SelectTarkov/SelectTarkov";
import SelectTarkov2 from "../SelectTarkov2/SelectTarkov2";
import SelectTarkov3 from "../SelectTarkov3/SelectTarkov3";
import SelectTarkov4 from "../SelectTarkov4/SelectTarkov4";
import SelectValorant from "../SelectValorant/SelectValorant";
import SelectValorant2 from "../SelectValorant2/SelectValorant2";
import SelectValorant3 from "../SelectValorant3/SelectValorant3";
import SelectFortnite from "../SelectFortnite/SelectFortnite";
import SelectRust from "../SelectRust/SelectRust";
import SelectRust2 from "../SelectRust2/SelectRust2";
import Pubg from "../Pubg/Pubg";
import Scum from "../Scum/Scum";
import SelectPubg from "../SelectPubg/SelectPubg";
import SelectScum from "../SelectScum/SelectScum";
import SelectSpoofer from "../SelectSpoofer/SelectSpoofer";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/" exact>
          <Header />
          <Image />
          <Cards />
          <Footer />
        </Route>
        <Route path="/apex" exact>
          <Header />
          <Apex />
          <Footer />
        </Route>
        <Route path="/tarkov" exact>
          <Header />
          <Tarkov />
          <Footer />
        </Route>
        <Route path="/valorant" exact>
          <Header />
          <Valorant />
          <Footer />
        </Route>
        <Route path="/fortnite" exact>
          <Header />
          <Fortnite />
          <Footer />
        </Route>
        <Route path="/rust" exact>
          <Header />
          <Rust />
          <Footer />
        </Route>
        <Route path="/spoofer" exact>
          <Header />
          <Spoofer />
          <Footer />
        </Route>
        <Route path="/guaranty" exact>
          <Header />
          <Guaranty />
          <Footer />
        </Route>
        <Route path="/apex/fortnade" exact>
          <Header />
          <SelectApex2 />
          <Footer />
        </Route>
        <Route path="/apex/esp" exact>
          <Header />
          <SelectApex />
          <Footer />
        </Route>
        <Route path="/apex/pro" exact>
          <Header />
          <SelectApex3 />
          <Footer />
        </Route>
        <Route path="/tarkov/neko" exact>
          <Header />
          <SelectTarkov />
          <Footer />
        </Route>
        <Route path="/tarkov/viking" exact>
          <Header />
          <SelectTarkov2 />
          <Footer />
        </Route>
        <Route path="/tarkov/titanium" exact>
          <Header />
          <SelectTarkov3 />
          <Footer />
        </Route>
        <Route path="/tarkov/millex" exact>
          <Header />
          <SelectTarkov4 />
        <Footer />
        </Route>
        <Route path="/valorant/aimbot" exact>
          <Header />
          <SelectValorant />
          <Footer />
        </Route>
        <Route path="/valorant/esp" exact>
          <Header />
          <SelectValorant2 />
          <Footer />
        </Route>
        <Route path="/valorant/pro" exact>
          <Header />
          <SelectValorant3 />
          <Footer />
        </Route>
        <Route path="/fortnite/millex" exact>
          <Header />
          <SelectFortnite />
          <Footer />
        </Route>
        <Route path="/rust/hooked" exact>
          <Header />
          <SelectRust />
          <Footer />
        </Route>
        <Route path="/rust/hyperaim" exact>
          <Header />
          <SelectRust2 />
          <Footer />
        </Route>
        <Route path="/pubg" exact>
          <Header />
          <Pubg />
          <Footer />
        </Route>
        <Route path="/scum" exact>
          <Header />
          <Scum />
          <Footer />
        </Route>
        <Route path="/pubg/millex" exact>
          <Header />
          <SelectPubg />
          <Footer />
        </Route>
        <Route path="/scum/millex" exact>
          <Header />
          <SelectScum/>
          <Footer />
        </Route>
        <Route path="/spoofer/millex" exact>
          <Header />
          <SelectSpoofer />
          <Footer />
        </Route>
        <Route path="*" exact>
          <Header />
          <NotFound />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
