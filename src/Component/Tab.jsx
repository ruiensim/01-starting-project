export default function Tab({children,button,ButtonContainer, ...props}){
    return(
        <>
        <ButtonContainer>{button}</ButtonContainer>
        <div {...props}>{children}</div>
        </>
    );

}