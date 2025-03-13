import Theme from "./components/common/Theme.js";
import Title from "./components/header/Title.js";
import Header from "./components/header/Header.js";
import {AppWrapper} from "@/components/common/AppWrapper";
import Navigation from "@/components/common/Navigation";
import Modal from "@/components/common/Modal";

export default function App() {
    return (
        <Theme>
            <Title/>
            <AppWrapper>
                <Modal>
                    <Header/>
                    <Navigation/>
                </Modal>
            </AppWrapper>
        </Theme>
    )
}
