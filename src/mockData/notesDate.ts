export interface INotesData {
  id: string
  title: string
  note: string
  date: string
  foto: string
  emoji: string | JSX.Element
}
export type TNotesData = INotesData[]

export const notesData: TNotesData = [
  {
    id: '1',
    title: 'Мой первый день на новой работе',
    note: 'Сегодня я начал работать в новой компании. Встреча с коллегами была очень теплой, все оказались дружелюбными и открытыми. Руководитель провел организационное собрание, на котором рассказал об основных задачах и целях компании. Я с нетерпением жду новых вызовов и возможностей, которые откроет эта работа.',
    date: 'Tue Aug 01 2023 10:36:39 GMT+0300 (Москва, стандартное время)',
    foto: 'https://images.unsplash.com/photo-1552960394-c81add8de6b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    emoji: '😄'
  },
  {
    id: '2',
    title: 'Поход в горы',
    note: 'Сегодня мы с друзьями совершили замечательный поход в горы. Восхождение было не легким, но виды, которые открывались с вершины, оказались потрясающими. Мы провели в горах целый день, наслаждаясь природой и общением друг с другом. Это был замечательный отдых от городской суеты.',
    date: 'Thu Aug 10 2023 12:23:10 GMT+0300 (Москва, стандартное время)',
    foto: 'https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    emoji: '😊'
  },
  {
    id: '3',
    title: 'Посещение выставки искусств',
    note: 'Сегодня я посетил выставку искусств в местной галерее. Там было представлено множество произведений различных художников. Я наслаждался каждой картиной, погружаясь в мир искусства. Такие мероприятия всегда вдохновляют и расширяют мои горизонты.',
    date: 'Mon Aug 07 2023 19:57:49 GMT+0300 (Москва, стандартное время)',
    foto: 'https://images.unsplash.com/photo-1600903781679-7ea3cbc564c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    emoji: '😇'
  },
  {
    id: '4',
    title: 'Пикник на природе',
    note: 'Сегодня мы организовали пикник на природе с друзьями. Приготовили вкусные закуски, салаты и шашлыки. Все провели время весело и активно: играли в волейбол, гуляли по лесу и наслаждались красивыми пейзажами. Общение и смех с друзьями всегда поднимает настроение.',
    date: 'Sat Aug 06 2023 17:23:38 GMT+0300 (Москва, стандартное время)',
    foto: 'https://plus.unsplash.com/premium_photo-1678914045635-149be1d09c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    emoji: '😊'
  },
  {
    id: '5',
    title: 'Поход в кино',
    note: 'Сегодня я пошел в кинотеатр с друзьями. Мы посмотрели новый фильм, который оказался увлекательным и захватывающим. После сеанса мы ещё долго обсуждали сюжет и впечатления. Кино всегда умеет подарить хорошее настроение и уйти от повседневной рутины.',
    date: 'Wed Aug 03 2023 23:12:06 GMT+0300 (Москва, стандартное время)',
    foto: 'https://images.unsplash.com/photo-1631702825172-a9a848c473ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    emoji: '😄'
  }
]
