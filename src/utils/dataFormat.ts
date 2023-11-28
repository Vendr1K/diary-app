type TDataFormat = {
  date: string
  vissible: 'shrot' | 'big'
}

export const dataFormat = ({ date, vissible }: TDataFormat) => {
  if (vissible === 'big') {
    const newDate = new Date(date).toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timeZone: 'UTC'
    })
    return firstWordToUpperCase(newDate).replace(/\./g, 'ода')
  }

  const newDate = new Date(date).toLocaleString('ru', {
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    timeZone: 'UTC'
  })

  return firstWordToUpperCase(newDate).replace(/\./g, ' ')
}

const firstWordToUpperCase = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)
