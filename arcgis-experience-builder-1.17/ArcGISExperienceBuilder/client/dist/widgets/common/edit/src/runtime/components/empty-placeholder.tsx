/** @jsx jsx */
import { jsx, css } from 'jimu-core'
import { InfoOutlined } from 'jimu-icons/outlined/suggested/info'

interface EmptyPlaceholderProps {
  emptyTips: string
}

const getStyle = () => {
  return css`
    .edit-blank {
      min-height: 300px;
      .placeholder-icon{
        color: var(--ref-palette-neutral-800);
      }
      & > div{
        top: calc(50% + 20px);
        transform: translateY(-50%);
      }
      p{
        font-size: 14px;
        margin-top: 16px;
        line-height: 19px;
        color: var(--ref-palette-neutral-1000);
      }
    }
  `
}

const EmptyPlaceholder = (props: EmptyPlaceholderProps) => {
  const { emptyTips } = props

  return (
    <div className='surface-1 border-0 h-100' css={getStyle()}>
      <div className='w-100 text-center edit-blank'>
        <div className='position-absolute edit-blank-content w-100'>
          <InfoOutlined size={32} className='placeholder-icon'/>
          <p>{emptyTips}</p>
        </div>
      </div>
    </div>
  )
}

export default EmptyPlaceholder
