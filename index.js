            const btns = document.querySelectorAll(".selector_btn_button");
            console.log(btns);
            
            btns.forEach(b=>{
                b.addEventListener("click", (e)=>{
                    let boton_id = e.target.getAttribute("id");
                    let roll = document.querySelector(".big_content");
                    //let operation = boton_id * -33.33;
                    let numeroX = -100 / 3;
                    let operation = boton_id * numeroX;
                    roll.style = `transform: translate(${operation}%)`;                        
                    btns.forEach(b=>{
                        b.setAttribute("value", "inactive")
                    })
                    e.target.setAttribute("value", "active");
                });
            });

            const btn = document.getElementById("button");

            document.getElementById("form").addEventListener("submit", function (e) {
                e.preventDefault();

                btn.value = "Sending...";

                const serviceID = "default_service";
                const templateID = "template_lah6rma";

                emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = "Send Email";
                    alert("Sent!");
                },
                (err) => {
                    btn.value = "Send Email";
                    alert(JSON.stringify(err));
                }
                );
            });

            const btn_more = document.querySelector(".more");
            console.log(btn_more);
            btn_more.addEventListener("click", ()=>{
                window.scroll({
                 top: 950,
                    behavior: 'smooth'
                });
            });