import * as Yup from 'yup';

export const petitionSchema = Yup.object({
    hospital: Yup.number().required("Campo Obligatorio"),
    casos: Yup.number().required('Campo Obligatorio'),
    mes: Yup.date().required("Campo Obligatorio")
})
