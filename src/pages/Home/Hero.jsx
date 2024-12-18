
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Hero = () => {
    return (
        <div>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                
                <SwiperSlide>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="max-w-6xl px-6 py-10 mx-auto">
                            <p className="text-xl font-medium text-blue-500">Movie Spotlight</p>

                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                About the Movie: Shaandaar
                            </h1>

                            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                    <img
                                        className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                                        src="https://www.whoa.in/download/shaandaar-bollywood-movies-hd-poster"
                                        alt="Shaandaar movie poster"
                                    />

                                    <div className="mt-2 md:mx-6">
                                        <div>
                                            <p className="text-xl font-medium tracking-tight text-white">Shaandaar</p>
                                            <p className="text-blue-200">Directed by Vikas Bahl</p>
                                        </div>

                                        <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                            *Shaandaar* is a 2015 Bollywood romantic comedy starring Shahid Kapoor and Alia Bhatt. Set during a lavish destination wedding, it tells the story of two insomniacs who fall in love. Known for its vibrant visuals and quirky humor, the movie explores themes of love, family, and happiness. The film also features Pankaj Kapur and Sanah Kapur in key roles.
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </section>


                </SwiperSlide>

                <SwiperSlide> 
                    <section className="bg-white dark:bg-gray-900">
                        <div className="max-w-6xl px-6 py-10 mx-auto">
                            <p className="text-xl font-medium text-blue-500">Movie Spotlight</p>

                            <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                                About the Movie: Beder Meye Josna
                            </h1>

                            <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                                <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                    <img
                                        className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6gSpelxiYCJE-fAC20ZvggnobWsLynRp3g&s"
                                        alt="client photo"
                                    />

                                    <div className="mt-2 md:mx-6">
                                        <div>
                                            <p className="text-xl font-medium tracking-tight text-white">Beder Meye Josna</p>
                                            <p className="text-blue-200">Directed by Tojammel Haque Bokul</p>
                                        </div>

                                        <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                                            *Beder Meye Josna* is a landmark Bangladeshi film released in 1989.
                                            The romantic drama stars Ilias Kanchan and Anju Ghosh in lead roles.
                                            It tells the love story of Josna, the daughter of a snake charmer, and a prince,
                                            blending elements of folklore, romance, and family drama.
                                            The films music, especially the iconic song Beder Meye Josna Amay Kotha Diyechhe,
                                            became a cultural phenomenon. This movie remains one of the highest-grossing
                                            and most beloved films in Bangladeshi cinema history.
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </section>
                </SwiperSlide>

                <SwiperSlide>
                    <section className="bg-white dark:bg-gray-900">
                    <div className="max-w-6xl px-6 py-10 mx-auto">
                        <p className="text-xl font-medium text-blue-500 ">Danga (1992 Film)</p>

                        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            Audience Reviews
                        </h1>

                        <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                            <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                            <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                                <img className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGC2J7OtenfrmjQoUbzP4FBOXhbZY-ltiqfQ&s" alt="client photo" />

                                <div className="mt-2 md:mx-6">
                                    <div>
                                        <p className="text-xl font-medium tracking-tight text-white">Danga</p>
                                            <p className="text-blue-200 ">Directed by Kazi Hayat</p>
                                    </div>

                                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">“Danga (1992) is a cinematic masterpiece that captures the essence of emotional drama and action. The storytelling is gripping, and the performances are truly memorable.”</p>
                                </div>
                            </div>
                        </main>
                    </div>
                </section>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;