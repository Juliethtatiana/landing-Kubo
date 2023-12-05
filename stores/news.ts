import { defineStore } from 'pinia'
export type NewsType = {
  title: String
  content: String
}
export const useNews = defineStore('news', {
  state: () => ({ news: [] as NewsType[] }),
  actions: {
    async fetchNews() {
      const news: NewsType[] = [
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content: 'This is important news 2!This is important news 2!',
        },
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content: 'This is important news 2!',
        },
        {
          title: 'Los Avances de la Inteligencia Artificial',
          content:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
        // Additional news items...
      ]

      this.news = news
    },
  },
  getters: {
    getNews: (state) => {
      return state.news
    },
  },
})
