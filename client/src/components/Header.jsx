import './header.css'

export default function Header() {
    return (
        <header className='app-header'>
            <div className='app-title'>
                <h1>Список задачь</h1>
            </div>
            <div className='app-settings'>
                <button >Настройки</button>
            </div>
        </header>
    )
}
