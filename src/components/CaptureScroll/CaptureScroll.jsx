import { useState } from "react"
import "./index.css"

function CaptureScroll(){
    const [position, setPosition] = useState(0);

    function handleOnScroll(event){
        const scrollPosition = event.target.scrollTop;
        console.log(position)
        setPosition(scrollPosition);
    }

    return(
        <>
            <div className="fullPage" onScroll={handleOnScroll}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero unde quia illo saepe deserunt ullam nostrum quibusdam? Molestias quibusdam deserunt, ratione, consectetur quas officia earum officiis ipsam distinctio aliquam dolorum.
                Accusantium praesentium delectus porro. Nemo, a at! Dignissimos odio itaque, similique non ad ullam sint sequi quia iusto! Laudantium, quam molestiae. Eveniet dolor corrupti nesciunt provident, consectetur repellat laudantium aperiam?
                Molestias amet ad illo aut tempora laudantium rerum, quisquam dolore placeat inventore. Itaque, veritatis delectus, laboriosam praesentium, id architecto hic incidunt aliquid voluptate magnam optio tempora quisquam fuga ratione assumenda.
                Nisi autem quidem laborum, ipsum numquam eum reprehenderit soluta, harum pariatur deserunt sint quod ipsam cum sunt cumque itaque libero. Hic voluptatem unde pariatur aut doloremque. Error similique laudantium asperiores.
                Aut nostrum laudantium earum ipsa corporis illo nobis, provident atque sint rem reiciendis a blanditiis ipsum. Ratione ab ipsam, est quod provident aliquam eum, blanditiis cupiditate mollitia hic libero? In.
                Minus, pariatur fugiat qui, error saepe voluptatum dolorum, rerum doloribus ab aliquid similique consectetur consequatur impedit eaque ut debitis molestias eligendi itaque dolorem nemo ad magni expedita hic! Explicabo, repellendus!
                Veritatis, magnam. Quibusdam, recusandae, placeat autem, maiores animi molestiae odit ipsum quasi laboriosam veritatis adipisci eum commodi? Inventore, eaque excepturi voluptatum odio consequuntur sequi? Velit quos modi ipsum corrupti suscipit.
                Alias velit at voluptatem porro accusamus dolorem, sequi eaque corrupti vel quas dignissimos eius laboriosam molestiae nemo non. Autem fugiat optio voluptatum. Placeat ex delectus modi molestias nesciunt sed obcaecati.
                Quia natus, architecto quasi maiores ab nostrum enim magnam ipsam iusto, vel necessitatibus ex sapiente odio accusamus labore quae et at magni vitae harum! Obcaecati hic omnis aliquam aperiam enim.
                Dolore fugiat eum quidem. Praesentium numquam sequi architecto dolore aliquid laborum distinctio veritatis iste dolorem perferendis atque maiores delectus odio repudiandae, tempora reprehenderit adipisci sit necessitatibus nemo, porro debitis repellat.
                Ducimus architecto facere quo eligendi voluptatibus, esse aliquid repellendus ex veniam, vitae earum ad praesentium temporibus veritatis quaerat aperiam dolores sapiente nisi commodi nobis voluptate nihil suscipit deleniti quos! Voluptatum.
                Est fugit nesciunt incidunt minus libero eum vero quidem nobis quod earum quibusdam, corrupti modi, temporibus, laboriosam nulla fuga? Inventore laudantium voluptates odio eveniet voluptas quis ipsa tenetur molestiae? Beatae?
                Consequatur ut mollitia tempore, optio placeat aliquid dolorum pariatur repellendus commodi, consectetur, voluptatum blanditiis! Dolores porro hic nemo, tempore facere earum, error quam saepe fugit expedita odit provident cum aspernatur!
                Consectetur neque fugiat error totam ipsam quod similique deserunt explicabo, sequi soluta voluptatibus ea necessitatibus id? Ullam voluptas dicta ratione vitae ipsa nihil optio saepe, neque mollitia, sequi, cupiditate error!
                Ex assumenda officia illo accusamus, repellendus nihil rem consequatur ea qui hic nemo tempora non, impedit doloremque, sed nulla. Omnis, eos quidem. Porro minima earum consectetur odio rem dolorum recusandae?
                Ea eaque necessitatibus quod aliquid rerum dolor inventore laborum veniam labore, quam commodi mollitia magnam saepe tempora accusantium explicabo quis quidem molestiae eum a voluptatem modi fugit error? Officia, veritatis!
                Reprehenderit, odit dolores incidunt ut ipsam odio nam consectetur harum nihil repellendus aspernatur veritatis velit vel asperiores perferendis modi iure ipsa accusamus. Officiis, doloribus quisquam voluptatum illum deserunt non rem!
                Dignissimos cupiditate, in et rem quaerat vitae enim reiciendis, nam excepturi itaque aliquid quisquam officiis illo nesciunt maxime nihil beatae dolorem suscipit! Animi eius laborum nesciunt, natus voluptate omnis numquam.
                Tempore eos mollitia vero delectus eligendi at quaerat, officia culpa odit voluptatibus. Vitae possimus repellat, neque sint at placeat impedit accusantium amet numquam ex voluptatum laboriosam dignissimos sed quibusdam similique!
                Quos exercitationem voluptates ex, eaque, incidunt quo reiciendis, vel fugiat dolorum iure dolore similique at. Nobis, doloremque eos! Eos, facere et consequatur repudiandae quaerat ratione dicta voluptas similique nesciunt eligendi.
            </div>
            <p className="marcador"> {position} </p>
        </>
    )
}

export default CaptureScroll