import { useContext } from 'react'
import { ProgressWrapperProps, GlobalCtx } from './../interfaces'
import GlobalContext from "./../context/Global";

const ProgressWrapper = (props: ProgressWrapperProps) => {
    const { progressWrapperStyles } = useContext<GlobalCtx>(GlobalContext);
    const progressStyle = {
        ...styles.progress, 
        ...progressWrapperStyles, 
        ...getProgressWrapperStyle(props) 
    };
    return (
        <div style={progressStyle as unknown as React.CSSProperties}>
            {props.children}
        </div>
    )
}

const getProgressWrapperStyle = ({ width }: { width: number }) => ({
    width: `${width * 100}%`,
})

const styles = {
    progress: {
        height: 2,
        maxWidth: '100%',
        background: '#555',
        margin: 2,
        borderRadius: 2,
        WebkitBackfaceVisibility: 'hidden' as const,
        MozBackfaceVisibility: 'hidden' as const,
        msBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden' as const,
    }
}

export default ProgressWrapper