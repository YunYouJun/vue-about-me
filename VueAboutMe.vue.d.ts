export interface AboutLink {
    /**
     * 类型
     */
    type?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 颜色
     */
    color?: string;
    /**
     * 背景色
     */
    backgroundColor?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 提示内容
     */
    label?: string;
    /**
     * 链接
     */
    href?: string;
    /**
     * 是否为暗色
     */
    isDark?: boolean;
    /**
     * @default '_blank'
     */
    target?: string;
}
type __VLS_Props = {
    /**
     * 是否为暗色模式
     */
    isDark?: boolean;
    copyright?: Partial<{
        name: string;
        repo: string;
        author: string;
        authorUrl: string;
        icon: string;
        iconUrl: string;
        link: string;
        color: string;
    }>;
    links?: Partial<AboutLink>[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    isDark: boolean;
    copyright: Partial<{
        name: string;
        repo: string;
        author: string;
        authorUrl: string;
        icon: string;
        iconUrl: string;
        link: string;
        color: string;
    }>;
    links: Partial<AboutLink>[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
