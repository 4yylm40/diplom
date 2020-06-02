<template>
  <div>
    <div class="tabl">
      <h2>Таблица лидеров</h2>
      <table class="table table-sm table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="profile of profiles" :key="profile.id">
            <th scope="row">1</th>
            <td>{{profile.name}}</td>
            <td>{{profile.score}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div data-aos="fade-up" class="container">
      <h1>WORLDSKILLS В РОССИИ</h1>Союз «Молодые профессионалы (Ворлдскиллс Россия)» – официальный оператор международного некоммерческого движения
      WorldSkills International, миссия которого – повышение стандартов подготовки кадров. Наш девиз: «Делай мир лучше
      силой своего мастерства!» («Improving the world with the power of skills!»).
      Раз в два года одна из 80 стран-участниц движения проводит мировой чемпионат профессионального мастерства. В
      2019-м он пройдет в России (WorldSkillsKazan 2019).
      WorldSkills Russia проводит всероссийские чемпионаты профессионального мастерства по пяти направлениям:
      Конкурсы профессионального мастерства между студентами колледжей и техникумов в возрасте до 22 лет. Раз в год
      победители региональных первенств соревнуются на Национальном финале «Молодые профессионалы»
      (WorldSkillsRussia). Из победителей формируется расширенный состав национальной сборной для участия в мировом
      чемпионате WorldSkills Competition. С 2017 года появилась отдельная возрастная линейка – юниоры WorldSkills (16
      и младше лет).
    </div>
    <section class="section__first" id="yak1">
      <div class="container" data-aos="zoom-out-left">
        <!--<div class="slider">
          <div class="section__panels">
            <div class="panel_container">
              <img src="../../public/img/1.jpg" alt />
              <p>
                Холодильной техники и систем кондиционирования. Тренировка расширенного состава
                Национальной сборной
              </p>
              <button
                type="submit"
                onclick="GoUrl('https://www.flickr.com/photos/133695719@N02/albums/72157713711760467')"
              >
                На
                сайт
              </button>
            </div>
          </div>

          <div class="section__panels">
            <div class="panel_container">
              <img src="../../public/img/2.jpg" alt />
              <p>Промышленный дизайн. Тренировка расширенного состава национальной сборной на выставке Batimat</p>
              <button
                type="submit"
                onclick="GoUrl('https://www.flickr.com/photos/133695719@N02/albums/72157713431783156')"
              >
                На
                сайт
              </button>
            </div>
          </div>

          <div class="section__panels">
            <div class="panel_container">
              <img src="../../public/img/3.jpg" alt />
              <p>Межвуз 2019: Преподавание технологии</p>
              <button
                type="submit"
                onclick="GoUrl('https://www.flickr.com/photos/133695719@N02/albums/72157712018109487')"
              >
                На
                сайт
              </button>
            </div>
          </div>
          <div class="section__panels">
            <div class="panel_container">
              <img src="../../public/img/4.jpg" alt />
              <p>Ландшафтный дизайн. Тренировка расширенного состава Национальной сборной</p>
              <button
                type="submit"
                onclick="GoUrl('https://www.flickr.com/photos/133695719@N02/albums/72157713433662851')"
              >
                На
                сайт
              </button>
            </div>
          </div>
        </div>-->
      </div>
    </section>
  </div>
</template>

<script>
import { getProfiles } from "../services/apiService";

export default {
  name: "Index",
  data() {
    return {
      profiles: []
    };
  },
  mounted() {
    getProfiles()
      .then(profiles => {
        this.profiles = profiles.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>