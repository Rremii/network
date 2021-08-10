import css from "./FormsControls.module.css"


const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={css.formControl + " " + (hasError ? css.error : "")}>
            <Element {...input} {...props} />
            <div>
                {hasError && <span> {meta.error} </span>}
            </div>

        </div>
    );
};


export const Textarea = Element("textarea")

export const Input = Element("input")


