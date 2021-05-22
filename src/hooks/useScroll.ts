import { useRef } from 'react'

type ScrollOptions = {
  top?: number
  left?: number
  behavior?: 'smooth' | 'auto'
}

/**
 * 特定位置までスクロールする
 */
function useScroll<T extends HTMLElement>() {
  /**
   * スクロール対象のref
   */
  const ref = useRef<T>(null)

  /**
   * ref要素をスクロールする
   * 引数と処理は window.scroll と同様に設定する
   * @see https://developer.mozilla.org/ja/docs/Web/API/Window/scroll
   */
  const scroll = (scrollOptions: ScrollOptions): void => {
    const { top, left, behavior } = scrollOptions
    const element = ref.current as T
    element.scroll({ top, left, behavior })
  }

  return { ref, scroll }
}

export default useScroll
