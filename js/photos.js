import {generateUniqueInteger, getRandomInteger} from './util.js';
import {getRandomComments} from './comments.js';

const LIKES_COUNT = {
  MIN: 15,
  MAX: 200
};

const ID_RANGE = {
  MIN: 1,
  MAX: 25
};

const URL_RANGE = {
  MIN: 1,
  MAX: 25
};

const PHOTO_DESCRIPTIONS = ['Закат над океаном',
  'Густой лес в тумане', 'Старая каменная башня', 'Поле с подсолнухами', 'Заснеженные горы на рассвете',
  'Уличное кафе в Париже', 'Тихий пляж с белым песком', 'Пейзаж с речкой и мостиком', 'Яркий фейерверк ночью',
  'Городская улица в дождь', 'Цветущий сад весной', 'Корабль в открытом море', 'Тропа в осеннем лесу',
  'Кошка на подоконнике', 'Ночное небо с луной', 'Живописный водопад', 'Рынок со свежими фруктами',
  'Древние руины в пустыне', 'Скала у побережья', 'Группа воздушных шаров в небе', 'Кофе и книги на столе',
  'Пастбище с коровами', 'Детский парк с аттракционами', 'Чайный домик в Японии', 'Маяк на скалистом берегу',
  'Озеро с отражением леса', 'Снежная деревня зимой', 'Песчаные дюны в пустыне', 'Романтический мост в вечернем свете',
  'Улица с цветными домами', 'Яхты в маленькой гавани', 'Кристально чистое горное озеро', 'Поле с маковыми цветами',
  'Маленькая хижина в горах', 'Закат в тропиках', 'Стадо оленей на рассвете', 'Городской парк с фонтаном',
  'Облачный горизонт над мегаполисом', 'Гребной канал с лодками', 'Старинный замок в горах'];

function getRandomPhotoObjects(objectsCount) {
  const objects = [];
  const getUniquePhotoIdValue = generateUniqueInteger(getRandomInteger, ID_RANGE.MIN, ID_RANGE.MAX);
  const getUniqueUrlValue = generateUniqueInteger(getRandomInteger, URL_RANGE.MIN, URL_RANGE.MAX);

  for (let i = 0; i < objectsCount - 1; i++) {
    const comments = getRandomComments();

    const photoId = getUniquePhotoIdValue();
    const url = `photos/${getUniqueUrlValue()}.jpg`;
    const description = PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)];
    const likes = getRandomInteger(LIKES_COUNT.MIN, LIKES_COUNT.MAX);

    objects.push({
      photoId,
      url,
      description,
      likes,
      comments
    });
  }

  return objects;
}

export {getRandomPhotoObjects};
