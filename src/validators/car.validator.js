import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Бренд повинен складатися тільки з літер мін: 1, макс: 20',
        'string.required': "Це поле обов`язкове"
    }), price: Joi.number().min(0).max(1000000).required().messages({
        'number.min.base': 'Мінімальна сума: 0',
        'number.max.base': 'Максимальна сума: 1 млн',
        'number.required': "Це поле обов`язкове"
    }), year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min.base': 'Мінімальний рік: 1990',
        'number.max.base': 'Максимальний рік: теперішній',
        'number.required': "Це поле обов`язкове"
    })
})

export {
    carValidator
}