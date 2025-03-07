interface PicInfo {
    id: number
    // "2025-03-07T13:30:44.6948822"
    // Преобразуем строку в объект moment
    // const date = moment(localDateTime);
    // Форматируем дату для отображения
    // const formattedDate = date.format('YYYY-MM-DD HH:mm:ss');
    lastModified?: string
}