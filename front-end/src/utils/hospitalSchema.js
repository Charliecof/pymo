import * as Yup from 'yup';

export const hospitalSchema = Yup.object({
    name: Yup.string().required("Campo Obligatorio")
})