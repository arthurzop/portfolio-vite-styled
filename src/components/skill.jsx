import * as S from '../styledComponents'

export default function Skill({ titulo, skills, unSkill }) {

    // if (skills === true){
    //     let number = []
    // }

    // const offnumber = [unSkill]

    return (
        <>
            <S.SubContainer>
                <S.SkillTitle>{titulo}</S.SkillTitle>
                <S.Container>
                    {skills.map(key => {
                        return (
                            <S.SkillFilled key={key} />
                        )
                    })}
                    {unSkill.map(key => {
                        return (
                            <S.SkillUnfilled key={key} />
                        )
                    })}
                </S.Container>
            </S.SubContainer>
        </>
    )
}