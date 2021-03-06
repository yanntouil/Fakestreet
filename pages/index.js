import Image from 'next/image';
import React from 'react';



/**
 * Home component
 */
export default function Home() {
    return (
        <>
            <div className="fs-image">
                <Image 
                    src={'/images/hamburgers-with-fries-in-cup-and-sauce-on-wooden-tray.jpg'} 
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                    alt={'image de test'} 
                />
            </div>

            <section className="container section">
                <h1>Welcome on Fakestreet</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat exercitationem excepturi similique ab praesentium aspernatur ut sed distinctio corrupti amet, itaque eligendi aut iure nesciunt deserunt error incidunt impedit quidem doloremque ad non quo, nulla rerum. Distinctio ad similique labore provident quo nisi, laudantium deleniti enim animi error nam exercitationem odio sit expedita aliquam incidunt possimus nemo architecto perferendis totam repellat in illum! Iste ut illum sit, delectus, tempora ducimus numquam possimus, asperiores porro eum in aperiam voluptatum soluta veritatis doloremque. Alias cupiditate dolore laborum illo eaque ipsa ipsam esse amet repellendus impedit odio veniam quasi tenetur quis minima, ducimus omnis odit animi consequuntur sit aliquid? Corrupti, illo suscipit quas quibusdam reprehenderit corporis, magni, culpa ex quia quis repellat enim nisi officiis blanditiis distinctio asperiores dignissimos. Esse dolorem, quae doloremque deleniti consequatur magnam necessitatibus incidunt illum optio omnis laborum? Laudantium ea nisi nam voluptates cum eum expedita minus officiis recusandae sunt corrupti, vel quasi odit quis, facilis autem! Quos, vero ducimus eos repellat ipsa iste vitae quo. Iure minus doloribus modi consectetur eum nesciunt quis eligendi minima architecto unde veniam tempore cupiditate, nulla, incidunt ab maiores! Nisi dolor libero, velit, ab sed iure dicta molestias modi excepturi voluptate a distinctio nesciunt reprehenderit vero nobis fugiat odit quisquam fugit, maxime aperiam minus? Veniam dignissimos facere porro aliquid dicta, harum fuga, ad dolores ipsa qui ipsam debitis blanditiis. Porro autem accusantium laborum harum totam quasi voluptatum optio atque, dolor in dolorum consequuntur iste iusto quidem eligendi nam laboriosam impedit ad animi fuga. Inventore assumenda a id debitis numquam. Cumque aliquid, sint voluptates omnis excepturi delectus ipsam cupiditate quam adipisci. Adipisci ipsa aspernatur sint in praesentium enim eaque accusantium iste doloremque voluptatum, molestias rem sapiente autem voluptates odio voluptas quia doloribus quasi? Non excepturi animi deleniti. Distinctio laudantium reiciendis rem ut maxime iste.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat exercitationem excepturi similique ab praesentium aspernatur ut sed distinctio corrupti amet, itaque eligendi aut iure nesciunt deserunt error incidunt impedit quidem doloremque ad non quo, nulla rerum. Distinctio ad similique labore provident quo nisi, laudantium deleniti enim animi error nam exercitationem odio sit expedita aliquam incidunt possimus nemo architecto perferendis totam repellat in illum! Iste ut illum sit, delectus, tempora ducimus numquam possimus, asperiores porro eum in aperiam voluptatum soluta veritatis doloremque. Alias cupiditate dolore laborum illo eaque ipsa ipsam esse amet repellendus impedit odio veniam quasi tenetur quis minima, ducimus omnis odit animi consequuntur sit aliquid? Corrupti, illo suscipit quas quibusdam reprehenderit corporis, magni, culpa ex quia quis repellat enim nisi officiis blanditiis distinctio asperiores dignissimos. Esse dolorem, quae doloremque deleniti consequatur magnam necessitatibus incidunt illum optio omnis laborum? Laudantium ea nisi nam voluptates cum eum expedita minus officiis recusandae sunt corrupti, vel quasi odit quis, facilis autem! Quos, vero ducimus eos repellat ipsa iste vitae quo. Iure minus doloribus modi consectetur eum nesciunt quis eligendi minima architecto unde veniam tempore cupiditate, nulla, incidunt ab maiores! Nisi dolor libero, velit, ab sed iure dicta molestias modi excepturi voluptate a distinctio nesciunt reprehenderit vero nobis fugiat odit quisquam fugit, maxime aperiam minus? Veniam dignissimos facere porro aliquid dicta, harum fuga, ad dolores ipsa qui ipsam debitis blanditiis. Porro autem accusantium laborum harum totam quasi voluptatum optio atque, dolor in dolorum consequuntur iste iusto quidem eligendi nam laboriosam impedit ad animi fuga. Inventore assumenda a id debitis numquam. Cumque aliquid, sint voluptates omnis excepturi delectus ipsam cupiditate quam adipisci. Adipisci ipsa aspernatur sint in praesentium enim eaque accusantium iste doloremque voluptatum, molestias rem sapiente autem voluptates odio voluptas quia doloribus quasi? Non excepturi animi deleniti. Distinctio laudantium reiciendis rem ut maxime iste.</p>
            </section>

            <section className="section section-image" style={{backgroundImage: "url('/images/restaurant-interior.jpg')"}}>
                <div className="container section opening-hours">
                    <h2 className="opening-hours-title">Opening hours</h2>
                    <div className="opening-hours-grid">
                        <div className="opening-hours-col">
                            <h2 className="title">Restaurant</h2>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Monday to Tuesday</h4>
                                <p className="content">11:30 am - 2:00 pm</p>
                                <p className="content">18:30 pm - 10:00 pm</p>
                            </div>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Friday and Saturday</h4>
                                <p className="content">11:30 am - 2:00 pm</p>
                                <p className="content">18:30 am - 12:00 am</p>
                            </div>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Sunday Brunch</h4>
                                <p className="content">10:00 am - 4:00 pm</p>
                            </div>
                        </div>
                        <div className="opening-hours-col">
                            <h2 className="title">Bar</h2>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Monday to Tuesday</h4>
                                <p className="content">10:00 am - 1:00 am</p>
                            </div>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Friday and Saturday</h4>
                                <p className="content">10:00 am - 5:00 am</p>
                            </div>
                            <div className="opening-hours-row">
                                <h4 className="secondary">Sunday</h4>
                                <p className="content">9:00 am - 11:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section">
                <h1>Welcome on Fakestreet</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat exercitationem excepturi similique ab praesentium aspernatur ut sed distinctio corrupti amet, itaque eligendi aut iure nesciunt deserunt error incidunt impedit quidem doloremque ad non quo, nulla rerum. Distinctio ad similique labore provident quo nisi, laudantium deleniti enim animi error nam exercitationem odio sit expedita aliquam incidunt possimus nemo architecto perferendis totam repellat in illum! Iste ut illum sit, delectus, tempora ducimus numquam possimus, asperiores porro eum in aperiam voluptatum soluta veritatis doloremque. Alias cupiditate dolore laborum illo eaque ipsa ipsam esse amet repellendus impedit odio veniam quasi tenetur quis minima, ducimus omnis odit animi consequuntur sit aliquid? Corrupti, illo suscipit quas quibusdam reprehenderit corporis, magni, culpa ex quia quis repellat enim nisi officiis blanditiis distinctio asperiores dignissimos. Esse dolorem, quae doloremque deleniti consequatur magnam necessitatibus incidunt illum optio omnis laborum? Laudantium ea nisi nam voluptates cum eum expedita minus officiis recusandae sunt corrupti, vel quasi odit quis, facilis autem! Quos, vero ducimus eos repellat ipsa iste vitae quo. Iure minus doloribus modi consectetur eum nesciunt quis eligendi minima architecto unde veniam tempore cupiditate, nulla, incidunt ab maiores! Nisi dolor libero, velit, ab sed iure dicta molestias modi excepturi voluptate a distinctio nesciunt reprehenderit vero nobis fugiat odit quisquam fugit, maxime aperiam minus? Veniam dignissimos facere porro aliquid dicta, harum fuga, ad dolores ipsa qui ipsam debitis blanditiis. Porro autem accusantium laborum harum totam quasi voluptatum optio atque, dolor in dolorum consequuntur iste iusto quidem eligendi nam laboriosam impedit ad animi fuga. Inventore assumenda a id debitis numquam. Cumque aliquid, sint voluptates omnis excepturi delectus ipsam cupiditate quam adipisci. Adipisci ipsa aspernatur sint in praesentium enim eaque accusantium iste doloremque voluptatum, molestias rem sapiente autem voluptates odio voluptas quia doloribus quasi? Non excepturi animi deleniti. Distinctio laudantium reiciendis rem ut maxime iste.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat exercitationem excepturi similique ab praesentium aspernatur ut sed distinctio corrupti amet, itaque eligendi aut iure nesciunt deserunt error incidunt impedit quidem doloremque ad non quo, nulla rerum. Distinctio ad similique labore provident quo nisi, laudantium deleniti enim animi error nam exercitationem odio sit expedita aliquam incidunt possimus nemo architecto perferendis totam repellat in illum! Iste ut illum sit, delectus, tempora ducimus numquam possimus, asperiores porro eum in aperiam voluptatum soluta veritatis doloremque. Alias cupiditate dolore laborum illo eaque ipsa ipsam esse amet repellendus impedit odio veniam quasi tenetur quis minima, ducimus omnis odit animi consequuntur sit aliquid? Corrupti, illo suscipit quas quibusdam reprehenderit corporis, magni, culpa ex quia quis repellat enim nisi officiis blanditiis distinctio asperiores dignissimos. Esse dolorem, quae doloremque deleniti consequatur magnam necessitatibus incidunt illum optio omnis laborum? Laudantium ea nisi nam voluptates cum eum expedita minus officiis recusandae sunt corrupti, vel quasi odit quis, facilis autem! Quos, vero ducimus eos repellat ipsa iste vitae quo. Iure minus doloribus modi consectetur eum nesciunt quis eligendi minima architecto unde veniam tempore cupiditate, nulla, incidunt ab maiores! Nisi dolor libero, velit, ab sed iure dicta molestias modi excepturi voluptate a distinctio nesciunt reprehenderit vero nobis fugiat odit quisquam fugit, maxime aperiam minus? Veniam dignissimos facere porro aliquid dicta, harum fuga, ad dolores ipsa qui ipsam debitis blanditiis. Porro autem accusantium laborum harum totam quasi voluptatum optio atque, dolor in dolorum consequuntur iste iusto quidem eligendi nam laboriosam impedit ad animi fuga. Inventore assumenda a id debitis numquam. Cumque aliquid, sint voluptates omnis excepturi delectus ipsam cupiditate quam adipisci. Adipisci ipsa aspernatur sint in praesentium enim eaque accusantium iste doloremque voluptatum, molestias rem sapiente autem voluptates odio voluptas quia doloribus quasi? Non excepturi animi deleniti. Distinctio laudantium reiciendis rem ut maxime iste.</p>
            </section>
        </>
    )
}
