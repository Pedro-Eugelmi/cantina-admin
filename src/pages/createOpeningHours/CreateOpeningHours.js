import FormCreateHours from "../../components/formCreateHours/FormCreateHours";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";

export default function createOpeningHours () {
    return (
        <>
            <Header/>
            <Title title="Criar horário"/>
            <FormCreateHours/>
        </>
    );
}