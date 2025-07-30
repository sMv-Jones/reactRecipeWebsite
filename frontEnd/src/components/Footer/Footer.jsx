function Footer(){
    const date = new Date();
    return (
        <div>
            Copright@{date.getFullYear()}
        </div>
    )
}

export default Footer;
